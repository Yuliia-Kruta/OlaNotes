package com.krutye.yuliiakruta.projects.olanotes.services.impl;

import com.krutye.yuliiakruta.projects.olanotes.dto.NoteDto;
import com.krutye.yuliiakruta.projects.olanotes.dto.UserEntityDto;
import com.krutye.yuliiakruta.projects.olanotes.models.Note;
import com.krutye.yuliiakruta.projects.olanotes.models.UserEntity;
import com.krutye.yuliiakruta.projects.olanotes.repositories.NoteRepository;
import com.krutye.yuliiakruta.projects.olanotes.repositories.UserRepository;
import com.krutye.yuliiakruta.projects.olanotes.security.SecurityUtil;
import com.krutye.yuliiakruta.projects.olanotes.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.krutye.yuliiakruta.projects.olanotes.mappers.NoteMapper.mapToNote;
import static com.krutye.yuliiakruta.projects.olanotes.mappers.NoteMapper.mapToNoteDto;

@Service
public class NoteServiceImpl implements NoteService {
    private NoteRepository noteRepository;
    private UserRepository userRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository, UserRepository userRepository) {
        this.noteRepository = noteRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<NoteDto> findAllNotes() {
        List<Note> notes = noteRepository.findAllByOrderByIsPinnedAscUpdatedOnAsc();
        return notes.stream().map(note -> mapToNoteDto(note)).collect(Collectors.toList());
    }

    @Override
    public Note saveNote(NoteDto noteDto) {
        String username = SecurityUtil.getSessionUser();
        UserEntity user = userRepository.findByUsername(username);
        Note note = mapToNote(noteDto);
        note.setCreatedBy(user);
        return noteRepository.save(note);
    }

    @Override
    public NoteDto findNoteById(Long noteId) {
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new NotFoundException("Note not found"));
        NoteDto noteDto = mapToNoteDto(note);
        return noteDto;
    }

    @Override
    public void updateNote(NoteDto noteDto) {
        Note existingNote = noteRepository.findById(noteDto.getNoteId()).orElseThrow(() -> new RuntimeException("Note not found"));
        Note updatedNote = mapToNote(noteDto);
        updatedNote.setCreatedOn(existingNote.getCreatedOn());
        updatedNote.setIsFavourite(existingNote.getIsFavourite());
        updatedNote.setIsPinned(existingNote.getIsPinned());
        updatedNote.setCreatedBy(existingNote.getCreatedBy());
        noteRepository.save(updatedNote);
    }

    @Override
    public void delete(Long noteId) {
        noteRepository.deleteById(noteId);
    }

    @Override
    public List<NoteDto> findNotesByUser(UserEntityDto userDto) {
        UserEntity userEntity = userRepository.findByUsername(userDto.getUsername());
        List<Note> notes = noteRepository.findAllByCreatedByOrderByIsPinnedAscUpdatedOnAsc(userEntity);
        return notes.stream().map(note -> mapToNoteDto(note)).collect(Collectors.toList());
    }

    @Override
    public List<NoteDto> searchNotes(String query, List<NoteDto> allNotes) {
        List<NoteDto> filteredNotes = new ArrayList<>();

        String lowercaseQuery = query.toLowerCase();

        for (NoteDto note : allNotes) {
            String noteTitle = removeHtmlTags(note.getTitle());
            String noteContent = removeHtmlTags(note.getContent());

            if (noteTitle.toLowerCase().contains(lowercaseQuery)
                    || noteContent.toLowerCase().contains(lowercaseQuery)) {
                filteredNotes.add(note);
            }
        }

        return filteredNotes;
    }
    private String removeHtmlTags(String input) {
        return input.replaceAll("\\<.*?\\>", "");
    }
}

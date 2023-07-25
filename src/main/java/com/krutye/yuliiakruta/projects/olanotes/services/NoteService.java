package com.krutye.yuliiakruta.projects.olanotes.services;

import com.krutye.yuliiakruta.projects.olanotes.dto.NoteDto;
import com.krutye.yuliiakruta.projects.olanotes.dto.UserEntityDto;
import com.krutye.yuliiakruta.projects.olanotes.models.Note;

import java.util.List;

public interface NoteService {
    List<NoteDto> findAllNotes();
    Note saveNote(NoteDto noteDto);

    NoteDto findNoteById(Long noteId);

    void updateNote(NoteDto note);

    void delete(Long noteId);

    List<NoteDto> findNotesByUser(UserEntityDto userDto);

    List<NoteDto> searchNotes(String query, List<NoteDto> allNotes);
}

package com.krutye.yuliiakruta.projects.olanotes.mappers;

import com.krutye.yuliiakruta.projects.olanotes.dto.NoteDto;
import com.krutye.yuliiakruta.projects.olanotes.models.Note;

public final class NoteMapper {

    public NoteMapper() {
    }

    public static Note mapToNote(NoteDto noteDto){
        if (noteDto == null) {
            return null;
        }
        Note note = Note.builder()
                .noteId(noteDto.getNoteId())
                .title(noteDto.getTitle())
                .content(noteDto.getContent())
                .createdOn(noteDto.getCreatedOn())
                .updatedOn(noteDto.getUpdatedOn())
                .isFavourite(noteDto.getIsFavourite())
                .isPinned(noteDto.getIsPinned())
                .build();
        return note;
    }
    public static NoteDto mapToNoteDto(Note note){
        if (note == null) {
            return null;
        }
        NoteDto noteDto = NoteDto.builder()
                .noteId(note.getNoteId())
                .title(note.getTitle())
                .content(note.getContent())
                .createdOn(note.getCreatedOn())
                .updatedOn(note.getUpdatedOn())
                .isFavourite(note.getIsFavourite())
                .isPinned(note.getIsPinned())
                .createdByUsername(note.getCreatedBy().getUsername())
                .build();
        return noteDto;
    }
}

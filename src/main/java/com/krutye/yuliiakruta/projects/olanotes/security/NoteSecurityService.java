package com.krutye.yuliiakruta.projects.olanotes.security;

import com.krutye.yuliiakruta.projects.olanotes.dto.NoteDto;
import com.krutye.yuliiakruta.projects.olanotes.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoteSecurityService {

    private final NoteService noteService;

    @Autowired
    public NoteSecurityService(NoteService noteService) {
        this.noteService = noteService;
    }

    public boolean isNoteOwner(Long noteId) {
        String currentUsername = SecurityUtil.getSessionUser();

        if (currentUsername != null) {
            NoteDto noteDto = noteService.findNoteById(noteId);
            return noteDto.getCreatedByUsername().equals(currentUsername);
        }

        return false;
    }
}


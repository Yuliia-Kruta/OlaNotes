package com.krutye.yuliiakruta.projects.olanotes.controllers;

import com.krutye.yuliiakruta.projects.olanotes.dto.NoteDto;
import com.krutye.yuliiakruta.projects.olanotes.dto.UserEntityDto;
import com.krutye.yuliiakruta.projects.olanotes.models.Note;
import com.krutye.yuliiakruta.projects.olanotes.security.SecurityUtil;
import com.krutye.yuliiakruta.projects.olanotes.services.NoteService;
import com.krutye.yuliiakruta.projects.olanotes.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@Controller
public class NoteController {
    private NoteService noteService;
    private UserService userService;

    @Autowired
    public NoteController(NoteService noteService, UserService userService) {
        this.noteService = noteService;
        this.userService = userService;
    }

    @GetMapping("/notes")
    public String listNotes(Model model){
        UserEntityDto user = new UserEntityDto();
        String username = SecurityUtil.getSessionUser();
        if(username!=null){
            user = userService.findUserByUsername(username);
            model.addAttribute("user", user);
        }
        List<NoteDto> notes = noteService.findNotesByUser(user);
        Collections.reverse(notes);
        model.addAttribute("notes", notes);
        return "notes-list";
    }

    @GetMapping("notes/new")
    public String createNoteForm(Model model){
        Note note = new Note();
        model.addAttribute("note", note);
        String username = SecurityUtil.getSessionUser();
        if (username != null) {
            UserEntityDto userDto = userService.findUserByUsername(username);
            model.addAttribute("user", userDto);
        }
        return "notes-new";
    }
    @PostMapping("/notes/new")
    public String saveNote(@ModelAttribute("note") NoteDto noteDto){
        noteDto.setIsFavourite(false);
        noteDto.setIsPinned(false);
        noteService.saveNote(noteDto);
        return "redirect:/notes";
    }

    @GetMapping("/notes/{noteId}/edit")
    @PreAuthorize("@noteSecurityService.isNoteOwner(#noteId)")
    public String editNoteForm(@PathVariable("noteId") Long noteId, Model model){
        String username = SecurityUtil.getSessionUser();
        if (username != null) {
            UserEntityDto userDto = userService.findUserByUsername(username);
            model.addAttribute("user", userDto);
        }
        NoteDto noteDto = noteService.findNoteById(noteId);
        model.addAttribute("note", noteDto);
        return "notes-edit";
    }

    @PostMapping("/notes/{noteId}/edit")
    @PreAuthorize("@noteSecurityService.isNoteOwner(#noteId)")
    public String updateNote(@PathVariable("noteId") Long noteId, @ModelAttribute("note") NoteDto note){
        note.setNoteId(noteId);
        noteService.updateNote(note);
        return "redirect:/notes";
    }

    @GetMapping("/notes/{noteId}")
    @PreAuthorize("@noteSecurityService.isNoteOwner(#noteId)")
    @ResponseBody
    public NoteDto viewNote(@PathVariable("noteId") Long noteId) {
        NoteDto noteDto = noteService.findNoteById(noteId);
        return noteDto;
    }

    @DeleteMapping("/notes/{noteId}/delete")
    @PreAuthorize("@noteSecurityService.isNoteOwner(#noteId)")
    public ResponseEntity<String> deleteNote(@PathVariable("noteId") Long noteId) {
        try {
            noteService.delete(noteId);
            return ResponseEntity.ok("Note deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error deleting note: " + e.getMessage());
        }
    }

    @PostMapping("/notes/{noteId}/favorite")
    @PreAuthorize("@noteSecurityService.isNoteOwner(#noteId)")
    public ResponseEntity<?> favoriteNote(@PathVariable("noteId") Long noteId, @RequestParam boolean isFavourite) {
        NoteDto note = noteService.findNoteById(noteId);
        note.setIsFavourite(isFavourite);
        noteService.saveNote(note);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/notes/{noteId}/pin")
    @PreAuthorize("@noteSecurityService.isNoteOwner(#noteId)")
    public ResponseEntity<?> pinNote(@PathVariable("noteId") Long noteId, @RequestParam boolean isPinned) {
        NoteDto note = noteService.findNoteById(noteId);
        note.setIsPinned(isPinned);
        noteService.saveNote(note);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/notes/search")
    public String searchClub(@RequestParam(value = "query") String query, Model model) {
        String username = SecurityUtil.getSessionUser();
        UserEntityDto userDto = userService.findUserByUsername(username);
        List<NoteDto> allNotes = noteService.findNotesByUser(userDto);
        List<NoteDto> searchedNotes = noteService.searchNotes(query, allNotes);
        model.addAttribute("notes", searchedNotes);
        model.addAttribute("user", userDto);
        return "notes-list";
    }
}
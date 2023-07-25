package com.krutye.yuliiakruta.projects.olanotes.dto;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Builder
public class NoteDto {

    private Long noteId;
    private String title;
    private String content;
    private LocalDateTime createdOn;
    private LocalDateTime updatedOn;
    private Boolean isFavourite;
    private Boolean isPinned;
    private String createdByUsername;
}

package com.krutye.yuliiakruta.projects.olanotes.repositories;

import com.krutye.yuliiakruta.projects.olanotes.models.Note;
import com.krutye.yuliiakruta.projects.olanotes.models.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findAllByOrderByIsPinnedAscUpdatedOnAsc();
    List<Note> findAllByCreatedByOrderByIsPinnedAscUpdatedOnAsc(UserEntity user);
}

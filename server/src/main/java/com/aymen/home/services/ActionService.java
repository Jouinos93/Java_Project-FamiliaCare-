package com.aymen.home.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aymen.home.models.Action;
import com.aymen.home.repositories.ActionRepository;

@Service
public class ActionService {
	
	// === CRUD ===

			@Autowired
			private ActionRepository ActionRepo;

			// READ ALL
			public List<Action> allActions(){
				return ActionRepo.findAll();
			}

			// CREATE
			public Action createAction(Action a) {
				return ActionRepo.save(a);
			}

			// READ ONE
			public Action findAction(Long id) {

				Optional<Action> maybeAction = ActionRepo.findById(id);
				if(maybeAction.isPresent()) {
					return maybeAction.get();
				}else {
					return null;
				}
			}

			// UPDATE 
			public Action updateAction(Action a) {
				return ActionRepo.save(a);
			}

			// DELETE
			public void deleteAction(Long id) {
				ActionRepo.deleteById(id);
			}



}
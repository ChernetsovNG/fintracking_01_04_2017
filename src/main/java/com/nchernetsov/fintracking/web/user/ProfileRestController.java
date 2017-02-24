package com.nchernetsov.fintracking.web.user;

import com.nchernetsov.fintracking.AuthorizedUser;
import com.nchernetsov.fintracking.model.User;
import com.nchernetsov.fintracking.to.UserTo;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(ProfileRestController.REST_URL)
public class ProfileRestController extends AbstractUserController {
    static final String REST_URL = "/rest/profile";

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public User get() {
        return super.get(AuthorizedUser.id());
    }

    @DeleteMapping
    public void delete() {
        super.delete(AuthorizedUser.id());
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @Override
    public void update(@Valid @RequestBody UserTo userTo) {
        super.update(userTo);
    }
}


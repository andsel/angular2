import { FormControl } from '@angular/forms';

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateEmail(c: FormControl) {

    if (EMAIL_REGEXP.test(c.value)) {
        return null;
    } else {
        return {
            validateEmail: {
                valid: false
            }
        };
    }

}
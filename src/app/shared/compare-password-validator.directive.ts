import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from "@angular/core";


@Directive({
    
    selector:'[compareDirectiveValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: compareDirectiveValidator,
            multi: true
        }]
})

export class compareDirectiveValidator implements Validator {
    validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
        const passwordField = passwordGroup.get('password');
        const confirmPasswordField = passwordGroup.get('confirmPassword');
        if (passwordField && confirmPasswordField &&
            passwordField.value !== confirmPasswordField.value) {
            return { 'notEqual': true };
        }

        return null;
    }
}
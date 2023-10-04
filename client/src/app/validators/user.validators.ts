import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0)
            return{
                cannotContainSpace: true,
            }
        return null;
    }

   static passwordsShouldMatch(control: AbstractControl){
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');
    if (password?.value !== confirmPassword?.value)
        return {passwordsShouldMatch: true}
    return null
}

}
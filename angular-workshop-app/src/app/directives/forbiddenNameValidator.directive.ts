import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/** An actor's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.toLowerCase().includes(control.value.toLowerCase());
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

import { Pipe, PipeTransform } from "@angular/core";
import { gender } from "../components/user/user.component";

@Pipe({
  name: 'salutation',
  standalone: true
})
export class SalutationPipe implements PipeTransform {
  transform(surname: string, gender: gender): any {
    switch (gender) {
      case "MALE":
        return "Lieber Herr " + surname;
      case "FEMALE":
        return "Liebe Frau " + surname;

      case "UNKNOWN":
        return "Hallo " + surname;
    }
  }
}

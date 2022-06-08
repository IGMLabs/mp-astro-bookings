import { AbstractControl, FormGroup } from "@angular/forms";
import { FormMessagesService } from "./form-messages.service";

export class FormBase {
  public form!: FormGroup;

  constructor(private fms : FormMessagesService) {
  }

  public hasError(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.invalid;
  }

  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName)
  }

  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName)
  }

  private getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }

}

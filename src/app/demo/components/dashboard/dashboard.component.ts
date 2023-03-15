import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    selectedForm: any;
    EmployeeForm!: FormGroup;
    PersonalDetailsForm!: FormGroup;
    selectedData: any;
    formtype: any;
    gender: any;
    group: any;
    radio: any;
    employeeArray: Array<any> = [];
    empDetailArray: Array<any> = [];
    selectedGroup: any;
    nationality: any;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {
        this.group = [
            { name: 'G1', value: 'G1' },
            { name: 'G2', value: 'G2' },
            { name: 'G3', value: 'G3' },
            { name: 'G4', value: 'G4' }
        ];
        this.formtype = [
            { name: 'Employee Form', value: 'employee' },
            { name: 'Personal Details Form', value: 'personal_details' },

        ];
        this.gender = [
            { name: 'Male', value: 'Male' },
            { name: 'Female', value: 'Female' },
            { name: 'Others', value: 'Others' },

        ];
        this.radio = [{ country: 'Indian', }, { country: 'Others' }];

        this.EmployeeForm = this.fb.group({
            'name': new FormControl(null, Validators.required),
            'gender': new FormControl('', Validators.required),
            'dob': new FormControl('', [Validators.required]),
            selectedGroup: [[{ name: "G3", value: "G3" }], Validators.required]
        });

        this.PersonalDetailsForm = this.fb.group({
            'address': new FormControl('', Validators.required),
            'mobilNumber': new FormControl('', Validators.required),
            nationality: new FormControl({ value: this.radio[0], disabled: true }, [Validators.required])

        });
    }

    onChange(event: any) {
        this.selectedData = event.value.value
    }

    submitEmployee(employeeData: any) {
        console.log("EMP", employeeData);
        this.employeeArray.push(employeeData)
        this.EmployeeForm.reset();
        this.EmployeeForm.controls['selectedGroup'].setValue([{ name: "G3", value: "G3" }]);

    }

    submitEmployeePersonal(empPersonalData: any) {
        console.log("EMP PER", empPersonalData);
        this.empDetailArray.push(empPersonalData)
        this.PersonalDetailsForm.reset();
        this.PersonalDetailsForm.controls['nationality'].setValue(this.radio[0]);
    }

    clear() {
        this.PersonalDetailsForm.reset();
        this.PersonalDetailsForm.controls['nationality'].setValue(this.radio[0]);
        this.EmployeeForm.reset();
        this.EmployeeForm.controls['selectedGroup'].setValue([{ name: "G3", value: "G3" }]);
    }
}

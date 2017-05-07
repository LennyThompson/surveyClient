import {EventEmitter, ElementRef, OnInit, Directive, Input, Output, AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NgModel} from '@angular/forms';

@Directive(
    {
        selector: "[debounce]"
    }
)
export class Debounce implements AfterViewInit
{
    @Input() delay: number = 300;
    @Output() func: EventEmitter<any> = new EventEmitter();

    constructor
    (
        private elementRef: ElementRef,
        private model: NgModel
    )
    {
    }

    ngAfterViewInit(): void
    {
        Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
            .debounceTime(this.delay)
            .subscribe((input: any) => {
                console.log("debouncing: " + input.target.value);
                // this.model.value = input.target.value;
            });
    }

}
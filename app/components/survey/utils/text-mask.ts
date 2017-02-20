//
//
// import {Directive, OnInit, AfterViewInit, forwardRef, Input, Renderer, ElementRef} from "@angular/core";
// import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";
// import {equalSegments} from "@angular/router/src/url_tree";
// @Directive(
//     {
//         host: {
//             "(input)": "onIinput($event)",
//             "(blur)": "_onTouched"
//         },
//         selector: "[textMask]",
//         providers: [
//             {
//                 provide: NG_VALUE_ACCESSOR,
//                 useExisting: forwardRef(() => MaskedInputDirective),
//                 multi: true
//             }
//         ]
//     }
// )
// export class MaskedInputDirective implements OnInit, AfterViewInit, ControlValueAccessor
// {
//     private textMaskInputElement: any;
//     private inputElement: HTMLInputElement;
//
//     private lastValue: any;
//
//     @Input("textmaske")
//     textmaskConfig = {
//         mask: "",
//         guide: true,
//         placeholderChar: '_',
//         pipe: undefined,
//         keepCharPositions: false,
//         onReject: undefined,
//         onAccept: undefined
//     };
//
//     _onTouched = () => {};
//     _onChange = () => {};
//
//     constructor(
//         private renderer: Renderer,
//         private element: ElementRef
//     )
//     {
//
//     }
//     ngOnInit(): void
//     {
//     }
//
//     ngAfterViewInit(): void
//     {
//         if(!this.inputElement)
//         {
//             this.setupMask();
//         }
//     }
//
//     private setupMask()
//     {
//         if(this.element.nativeElement.tagName === "INPUT")
//         {
//             this.inputElement = this.element.nativeElement;
//         }
//         else
//         {
//             this.inputElement = this.element.nativeElement.getElementsByTagName("INPUT");
//         }
//
//         if(this.inputElement)
//         {
//             this.textMaskInputElement = createTextMaskInputelement(
//                 Object.assign({ inputElement: this.inputElement })
//             )
//         }
//     }
//
//     writeValue(obj: any): void
//     {
//     }
//
//     registerOnChange(fn: any): void
//     {
//     }
//
//     registerOnTouched(fn: any): void
//     {
//     }
//
// }
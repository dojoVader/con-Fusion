/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {
    Directive,
    forwardRef,
    OnDestroy,
    OnInit,
    ElementRef,
    ViewContainerRef,
    NgZone,
    ChangeDetectorRef,
    Inject,
    Optional,
    Host,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    _countGroupLabelsBeforeOption,
    _getOptionScrollPosition,
} from '@angular/material/core';
import { MatAutocompleteTrigger, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MatFormField } from '@angular/material';
import { Overlay, ViewportRuler } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/platform-browser';





@Directive({
    selector: `input[matAutocomplete], textarea[matAutocomplete]`,
    host: {
        '[attr.autocomplete]': 'autocompleteAttribute',
        '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
        '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
        '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
        '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
        '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        '(focusin)': '_handleFocus()',
        '(blur)': '_onTouched()',
        '(input)': '_handleInput($event)',
        '(keydown)': '_handleKeydown($event)',
    },
    exportAs: 'matAutocompleteTrigger'
})
export class AppRiverMatAutocompleteTriggerDirective extends MatAutocompleteTrigger implements OnInit {

    ngOnInit() {
       
    }

    openPanel(): void {
        console.log('Hiii');
    }

}

import {Component, View, ElementRef, OnInit, ViewEncapsulation} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';

@Component({
    selector: 'vg-scrub-bar',
    inputs: [
        'targetId: for'
    ],
    host: {
        '(mousedown)': 'onMouseDownScrubBar($event)'
    }
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-scrub-bar/vg-scrub-bar.html',
    encapsulation: ViewEncapsulation.NONE
})
export class VgScrubBar implements OnInit {

    constructor(ref:ElementRef, public API:VgAPI) {
        this.elem = ref.nativeElement;
    }

    onInit() {
        this.target = this.API.getMediaById(this.targetId);
    }

    onMouseDownScrubBar($event) {
        var percentage = $event.offsetX * 100 / this.elem.scrollWidth;

        this.target.seekTime(percentage, true);
    }
}

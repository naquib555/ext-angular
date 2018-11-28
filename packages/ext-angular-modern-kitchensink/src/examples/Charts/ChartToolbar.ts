import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var Ext: any;

Ext.require([
    'Ext.chart.theme.Blue',
    'Ext.chart.theme.Green',
    'Ext.chart.theme.Muted',
    'Ext.chart.theme.Red',
    'Ext.chart.theme.Sky',
    'Ext.chart.theme.Yellow'
]);


@Component({
    selector: 'chart-toolbar',
    templateUrl: './ChartToolbar.html',
    styles: [``]
})
export class ChartToolbarComponent implements OnInit {


    @Input()
    theme;

    @Input()
    stacked;

    @Input()
    zoom;

    @Input()
    onlyMidnight: boolean = false;

    @Input()
    onThemeChange;

    @Input()
    onToggleZoomOnPan;

    @Input()
    onToggleCrosshair;

    @Input()
    onRefreshClick;

    @Input()
    downloadChartRef;

    @Input()
    onStackGroup;

    toolbarItemDefaults = {
        margin: '0 10px 0 0'
    }

    downloadChart = (chart) => {
        if (Ext.is.Desktop) {
            chart.download({ filename: 'Chart' });
        } else {
            chart.preview();
        }
    }

    show: boolean = false;

    isPhone: boolean = Ext.os.is.Phone;
    supportsTouch: boolean = Ext.supports.Touch;

    constructor() { }



    ngOnInit() {
    }


    onThemeChangeDefault = () => {
        this.onThemeChange('default');
    }
    onThemeChangeMidnight = () => {
        this.onThemeChange('midnight');
    }
    onThemeChangeGreen = () => {
        this.onThemeChange('green');
    }
    onThemeChangeRed = () => {
        this.onThemeChange('red');
    }
    onThemeChangeMuted = () => {
        this.onThemeChange('muted');
    }
    onThemeChangeSky = () => {
        this.onThemeChange('sky');
    }
    onThemeChangeYellow = () => {
        this.onThemeChange('yellow');
    }

    onToggleZoomOnPanPan = () => {
        this.onToggleZoomOnPan(false)
    }
    onToggleZoomOnPanZoom = () => {
        this.onToggleZoomOnPan(true)
    }

    onToggleCrosshairLocal = () => {
        this.onToggleCrosshair(true);
    }

}
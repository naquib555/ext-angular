 /**
 * @since 6.6.0
 * 
 * Example usage:
 *
 *            @example packages=[extangular]
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 *
 *            Ext.require('Ext.ux.gauge.needle.Arrow');
 *
 *            @Component({
 *                selector: 'app-root-1',
 *                styles: [`
 *                        `],
 *                template: `
 *                    <formpanel #item shadow="true" layout="vbox" maxWidth="850">
 *                        <sliderfield #item label="Value" width="350" (change)="updateGauges($event)" [value]="needleValue">
 *                        </sliderfield>
 *                        <container #item
 *                            [layout]="{type: 'hbox', align: 'stretch'}" 
 *                            [margin]="'10 0 10 0'"
 *                            flex="1" 
 *                            [width]="'100%'"
 *                            minHeight="200"
 *                        >
 *                            <gauge #item
 *                                flex="1"
 *                                [value]="needleValue"
 *                                [needle]="{type: 'arrow', innerRadius: 0}"
 *                                [textOffset]="{ dy: 45 }"
 *                            ></gauge>     
 *                        </container>
 *                    </formpanel>
 *                `
 *            })
 *            export class AppComponent {
 *                needleValue:number = 30;
 *                
 *                updateGauges = (param) => {
 *                    this.needleValue = param.newValue;
 *                }
 *            }
 */
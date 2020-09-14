import { Component, OnInit, Input, AfterViewChecked, AfterContentChecked, Output, EventEmitter, VERSION, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PMR } from '../pmr';
import { PmrWebService } from './pmr-web.service';
import { PartialObserver } from 'rxjs';


const TEST_URL = "http://mms-mission-request-svc-testing.apps.ptes.io/pmr"
@Component({
  selector: 'app-create-pmr',
  templateUrl: './create-pmr.component.html'
})
/**
 ** Creates the pmr screen for data entry and validation
 */
export class CreatePmrComponent implements OnInit {
  constellations = ['PTS', 'WGS', 'Commercial'];
  flights = ['WGS-1', 'WGS-2', 'WGS-3', 'WGS-4', 'WGS-5', 'WGS-6', 'WGS-7', 'WGS-8', 'WGS-9', 'WGS-10'];
  port_modes = ['PPPoE', 'Port Based', 'Unbundled-VPB', 'Bundled-VPB'];
  directions = ['Tx+Rx', 'Rx only'];
  rb_locations = ['No Reachback', 'Arifjan RHN', 'Camp Roberts RHN', 'Ft. Bragg RHN', 'Guam RHN', 'Landstuhl RHN', 'NCTAMS PAC', 'NCTAMS LANT'];
  rb_methods = ['N/A', 'RCAP', 'Joint_Hub'];
  term_types = ['GMT', 'NMT', 'NMT LD', 'PoP', 'RHN', 'SNE', 'STT-HP2', 'Sub', 'TCN'];
  requested_bands = ['C', 'Mil-X', 'Ku', 'Mil-Ka', 'Comm-Ka'];
  dscps = ['WIN-T', 'GMT', 'ADNS', 'USMC'];
  mission_priorities = ['1A  System Control/Orderwire',
    '1B  Executive Support',
    '1B1  Presidential Support',
    '1B2  SecDef Support',
    '1B3  Secretary of State/Envoy and Emissary Support/Diplomatic Negotiations',
    '1C  Strategic and Threat Warning/Intelligence',
    '1D  National and Strategic Nuclear Force Direction Requirements',
    '1E  SecDef Directed CCMD Emergency Operations Authority',
    '2A  CJCS Support',
    '2B  CCDR Operations',
    '2C  JTF or CTF Operations Direct Task Force Communications',
    '2D  Component Operations (Theater Forces)',
    '2E  Tactical Warning and Intelligence',
    '3A  Humanitarian Support/DSCA',
    '3B  CCDR Operations',
    '3C  JTF CTF Operations',
    '3D  Component Operations',
    '3E  Intelligence and Weather',
    '3F  Diplomatic Post Support',
    '3G  Space Vehicle Support',
    '3H  EMI Activity Resolution',
    '3I  Logistics',
    '4A  CJCS-Directed Exercise',
    '4B  Pre-Deployment Exercise/Training',
    '4C  CCMD Sponsored',
    '4D  Major Command',
    '4E  Joint Forces Training',
    '4F  Unit Sponsored',
    '5A  Service Secretaries',
    '5B  Service Chiefs',
    '5C  CCDR Travel',
    '5D  Other Travel',
    '6A  EMI Activity Testing',
    '6B  DoD-Sponsored Testing',
    '6C  DoD-Sponsored Demonstrations',
    '6D  DoD Administrative Support',
    '6E  DoD Quality of Life Initiatives',
    '7A  DoD Support to Law Enforcement (Non-JTF Support)',
    '7B  Civil Non-Federal Agency Support',
    '7C  Non-U.S. Support as Approved by the Authorized Organization',
    '7D  Other'];
  cc_s_a_sponsors = [
    {
      name: 'USCENTCOM',
      components: ['USARCENT',
        'USNAVCENT',
        'AFCENT',
        'USMARCENT',
        'USSOCCENT'
      ]
    },
    {
      name: 'USEUCOM',
      components: ['USAREUR',
        'USNAVEUR',
        'USAFE',
        'USMARFOREUR',
        'USSOCEUR'
      ]
    },
    {
      name: 'USNORTHCOM',
      components: ['USARNORTH',
        'USAFNORTH',
        'USFF',
        'USMARFORNORTH',
        'USSOCNORTH',
        'USJTFNORTH'
      ]
    },
    {
      name: 'USSOUTHCOM',
      components: ['USARSOUTH',
        'USAFSOUTH',
        'USMARFORSOUTH',
        'USNAVSO/FOURTHFLT',
        'USSOCSOUTH'
      ]
    },
    {
      name: 'USINDOPACOM',
      components: ['USARPAC',
        'USMARFORPAC',
        'USPACFLT',
        'USPACAF',
        'USSOCPAC',
        'USSOCKOR',
        'USFK',
        'USFJ'
      ]
    },
    {
      name: 'USAFRICOM',
      components: ['USARAF',
        'USNAVAF',
        'USAFAFRICA',
        'USMARFORAF',
        'USSOCAFRICA',
        'CJTF-HOA'
      ]
    },
    {
      name: 'USSTRATCOM',
      components: ['USJFACC',
        'USJFMCC',
        'USJFSCC',
        'USJFCC-IMD',
        'USJWAC'
      ]
    },
    {
      name: 'USSOCOM',
      components: ['USASOC',
        'USMARSOC',
        'USNAVSPECWARCOM',
        'USAFSOC',
        'USJSOC'
      ]
    }
  ];
  rsscs = ['RSSC-East',
    'RSSC-West',
    'RSSC-EUR',
    'RSSC-PAC'];

  cssa_selection = this.cc_s_a_sponsors[0].components;

  pmr_model = new PMR(0, '', '', '', '', '', '', '', '', '', '', '', 0, 0, '', '', '', '', 
  '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, '', '', '', 0, 0, '', '', 
  '', '', '', '', '', '', '', '', '', 0, '', '', 0, 0, 0, 0, 0, 0, '', '', '', '', '', '', '');

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(private readonly formBackEnd: PmrWebService, private readonly _formBuilder: FormBuilder) { }
  responseValue: PartialObserver<Component>;
  testOutput = "";
  submitted = false;
  // Form submission button
  onSubmit() {
    this.testOutput = JSON.stringify(this.pmr_model);
    this.formBackEnd.postForm(this.pmr_model, TEST_URL).subscribe(
      this.responseValue = this.response
    );
  }


  /**
   * Event callback for selected CC S A Sponsor to populte the CC S A select input
   * @method select_cc_s_a_component
   * @returns void
   */
  select_cc_s_a_component(event): void {
    for (let i = 0; i < this.cc_s_a_sponsors.length; i++) {
      if (this.cc_s_a_sponsors[i].name === event.source.value) {
        this.cssa_selection = this.cc_s_a_sponsors[i].components;
        break;
      }
    }
    // if (event && event.preventDefault) {
    //   event.preventDefault();
    // }
  }

  @Input() index: number;

  @Output() indexChange = new EventEmitter();

  move(index: number) {
    this.index = index;
    this.indexChange.emit(index)
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return this.testOutput; }
  get response() { return this.responseValue; }


}

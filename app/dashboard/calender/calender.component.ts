import { Component, OnInit , ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { AllService } from '../../all.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  providers:[AllService]
})
export class CalenderComponent implements OnInit {

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private _ser: AllService) {}
  ngOnInit() {
     this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: []
      };
  }
  // OnSave(data){
  //   console.log(data);
  //   this._ser.addEvent(data).subscribe((res)=>{
  //     console.log(res);
  //   })
  // }
  }

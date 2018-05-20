import { Component, OnInit, Output,Input ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() Msg = '';
  @Output() show: EventEmitter<any> = new EventEmitter();
  // Msg = "Msg Text";
  constructor() { }

  ngOnInit() {
  }

  showMsg(){
    this.Msg = "U click the Btn right?";
    this.show.emit(this.Msg);
  }

}

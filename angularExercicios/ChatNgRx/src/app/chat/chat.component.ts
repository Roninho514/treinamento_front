import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatLoginComponent } from '../chat-login/chat-login.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  constructor(public dialog: MatDialog
    ){this.openDialog()}

    public username: string = ""

    public openDialog(){
      let dialogRef = this.dialog.open(ChatLoginComponent,{
        width: '300px',
        data: this.username,
        disableClose: true
      })

      dialogRef.afterClosed().subscribe(result => {
        this.username = result
      })
    }
}

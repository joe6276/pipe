import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est reiciendis beatae laboriosam voluptatum facilis quod atque aut nisi, quis, eum consequatur quo officia consequuntur cum? Rerum dignissimos quo quibusdam beatae ex iusto voluptas placeat. Quidem ipsam quia odit reprehenderit assumenda ullam laudantium hic quod consectetur! Modi facere tempora dolores quisquam."
  text2='Jonathan Ndambuki'
  filters=''

  appStatus= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Stable')
    },2000)
  })
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  addServer(){
  this.servers.push(
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  )
  }
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}

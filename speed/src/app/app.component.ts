import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'speed';
  public developerVersion = '4';

  constructor(swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        const msg =
          'current: ' +
          event.current.hash +
          '. Load new: ' +
          event.available.hash +
          ' ?';
        if (confirm(msg)) { window.location.reload(); }
        }
      );
    }
  }
}

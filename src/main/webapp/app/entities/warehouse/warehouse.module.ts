import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared/shared.module';
import { WarehouseComponent } from './warehouse.component';
import { WarehouseDetailComponent } from './warehouse-detail.component';
import { WarehouseUpdateComponent } from './warehouse-update.component';
import { WarehouseDeleteDialogComponent } from './warehouse-delete-dialog.component';
import { warehouseRoute } from './warehouse.route';

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(warehouseRoute)],
  declarations: [WarehouseComponent, WarehouseDetailComponent, WarehouseUpdateComponent, WarehouseDeleteDialogComponent],
  entryComponents: [WarehouseDeleteDialogComponent]
})
export class JhipsterSampleApplicationWarehouseModule {}

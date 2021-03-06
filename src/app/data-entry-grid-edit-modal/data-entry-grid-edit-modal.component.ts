import { Component, OnInit } from '@angular/core';
import {
  SkyAgGridService,
  SkyCellType
  //SkyDatepickerProperties
} from '@skyux/ag-grid';
import { SkyModalInstance } from '@skyux/modals';
import {
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent
  // ICellEditorParams
} from 'ag-grid-community';
import { User} from '../User';
import { SkyDataEntryGridEditModalContext } from './data-entry-grid-edit-modal-context';

@Component({
  selector: 'sky-demo-edit-modal-form',
  templateUrl: './data-entry-grid-edit-modal.component.html'
})
export class SkyDataEntryGridEditModalComponent implements OnInit {
  public columnDefs: ColDef[];
  public gridApi: GridApi;
  public gridData: User[];
  public gridOptions: GridOptions;

  constructor(
    private agGridService: SkyAgGridService,
    public context: SkyDataEntryGridEditModalContext,
    public instance: SkyModalInstance
  ) {}

  public ngOnInit(): void {
    this.gridData = this.context.gridData;
    this.columnDefs = [
      {
        field: 'firstName',
        headerName: 'First Name',
        type: SkyCellType.Text
      },
      {
        field: 'lastName',
        headerName: 'Last Name',
        type: SkyCellType.Text
      },
      {
        field: 'phoneNumber',
        headerName: 'Contact Number',
        type: SkyCellType.Text,
        editable: true
      },
      {
        field: 'email',
        headerName: 'E-mail Address',
        type: SkyCellType.Text
      },
      {
        field: 'date',
        headerName: 'DOB',
        type: SkyCellType.Text,
        editable: true
      },
      {
        field: 'address',
        headerName: 'Address',
        type: SkyCellType.Text,
        editable: true
      }
    ];

    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: (gridReadyEvent) => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getEditableGridOptions({
      gridOptions: this.gridOptions
    });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }
}

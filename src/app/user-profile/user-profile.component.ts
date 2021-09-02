import { Component, Input, OnInit } from '@angular/core';
import { SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyModalCloseArgs, SkyModalService } from '@skyux/modals';
import { GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';

import { SkyDataEntryGridContextMenuComponent } from '../data-entry-grid-context-menu/data-entry-grid-context-menu.component';
import { SkyDataEntryGridEditModalContext } from '../data-entry-grid-edit-modal/data-entry-grid-edit-modal-context';
import { SkyDataEntryGridEditModalComponent } from '../data-entry-grid-edit-modal/data-entry-grid-edit-modal.component';
import { User } from '../User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() public gridData: User[];

  public columnDefs = [
    {
      field: 'selected',
      type: SkyCellType.RowSelector
    },
    {
      colId: 'context',
      headerName: '',
      maxWidth: 50,
      sortable: false,
      cellRendererFramework: SkyDataEntryGridContextMenuComponent
    },
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
      headerName: 'Contact No.',
      maxWidth: 140,
      minWidth: 135,
      type: SkyCellType.Text
    },
    {
      field: 'email',
      headerName: 'Email',
      type: SkyCellType.Text
    },
    {
      field: 'date',
      headerName: 'DOB',
      maxWidth: 110,
      type: SkyCellType.Text
      // valueFormatter: this.endDateFormatter
    },
    {
      field: 'address',
      headerName: 'Address',
      type: SkyCellType.Text
    }
  ];

  public gridApi: GridApi;
  public gridOptions: GridOptions;
  public searchText: string;
  constructor(
    private agGridService: SkyAgGridService,
    private modalService: SkyModalService
  ) {}
  public ngOnInit(): void {
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: (gridReadyEvent) => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({
      gridOptions: this.gridOptions
    });
  }
  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }

  public openModal(): void {
    const context = new SkyDataEntryGridEditModalContext();
    context.gridData = this.gridData;

    const options = {
      providers: [
        { provide: SkyDataEntryGridEditModalContext, useValue: context }
      ],
      ariaDescribedBy: 'docs-edit-grid-modal-content',
      size: 'large'
    };

    const modalInstance = this.modalService.open(
      SkyDataEntryGridEditModalComponent,
      options
    );

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      if (result.reason === 'cancel' || result.reason === 'close') {
        alert('Edits canceled!');
      } else {
        this.gridData = result.data;
        this.gridApi.refreshCells();
        alert('Saving data!');
      }
    });
  }

  public searchApplied(searchText: string): void {
    this.searchText = searchText;
    this.gridApi.setQuickFilter(searchText);
  }
}

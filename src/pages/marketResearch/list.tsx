import React from "react";
import {
    useDataGrid,
    EditButton,
    ShowButton,
    DeleteButton,
    List,
} from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IResourceComponentsProps } from "@refinedev/core";

export const MarketResearchList: React.FC<IResourceComponentsProps> = () => {
    const { dataGridProps } = useDataGrid();

    const columns = React.useMemo<GridColDef[]>(
        () => [
            {
                field: "account_name",
                headerName: "account_name",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "sector",
                headerName: "sector",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "industry_vertical",
                headerName: "industry_vertical",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "area",
                headerName: "Area",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "subsidiary",
                headerName: "subsidiary",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "sales_unit",
                headerName: "sales_unit",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "actions",
                headerName: "Actions",
                sortable: false,
                renderCell: function render({ row }) {
                    return (
                        <>
                            <EditButton hideText recordItemId={row.id} />
                            <ShowButton hideText recordItemId={row.id} />
                            <DeleteButton hideText recordItemId={row.id} />
                        </>
                    );
                },
                align: "center",
                headerAlign: "center",
                minWidth: 80,
            },
        ],
        [],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};

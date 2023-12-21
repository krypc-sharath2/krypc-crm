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
                headerName: "Account Name",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "sector",
                headerName: "Potential for Customization",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "industry_vertical",
                headerName: "Long-Term Visibility",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "area",
                headerName: "Strategic Fit",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "subsidiary",
                headerName: "Microsoft Partnership",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "sales_unit",
                headerName: "Technology Adoption",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "sales_unit",
                headerName: "Partnerships",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "sales_unit",
                headerName: "Recent Market Activity",
                sortable: false,
                align: "center",
                headerAlign: "center",
            },
            {
                field: "sales_unit",
                headerName: "Industry Focus",
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
        <List canCreate={true}>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};

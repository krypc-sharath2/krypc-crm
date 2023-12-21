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

export const PillarList: React.FC<IResourceComponentsProps> = () => {
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
                field: "web3-dApps",
                headerName: "dApps",
                sortable: false,
                align: "center",
                headerAlign: "center",
                headerClassName :'child-header'
            },
            {
                field: "web3-SmartContract",
                headerName: "SmartContract Automation",
                sortable: false,
                align: "center",
                headerAlign: "center",
                headerClassName :'child-header'
            },
            {
                field: "web3-NFTs",
                headerName: "NFTs",
                sortable: false,
                align: "center",
                headerAlign: "center",
                headerClassName :'child-header'
            },
            {
                field: "Permissioned Blockchain",
                headerName: "Permissioned Blockchain",
                sortable: false,
                align: "center",
                headerAlign: "center",
                headerClassName :'child-header'
            },
            {
                field: "Supplychain",
                headerName: "Supplychain",
                sortable: false,
                align: "center",
                headerAlign: "center",
                headerClassName :'child-header'
            },
            {
                field: "Self Sovereign Identity",
                headerName: "Self Sovereign Identity",
                sortable: false,
                align: "center",
                headerAlign: "center",
                headerClassName :'child-header'
            },
            {
                field: "DeFi Solutions",
                headerName: "DeFi Solutions",
                sortable: false,
                align: "center",
                headerAlign: "center",
                headerClassName :'child-header'
            },
            {
                field: "Provenance",
                headerName: "Provenance",
                sortable: false,
                align: "center",
                headerAlign: "center",
                headerClassName :'child-header'
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
        <List contentProps={{sx: {
                '& .my-group-header': {
                    backgroundColor: 'blue',
                },
                '& .hlf-group-header': {
                    backgroundColor: 'blueviolet',
                },
                '& .child-header': {
                    backgroundColor: 'yellow',
                },
            }}}>
            <DataGrid   experimentalFeatures={{ columnGrouping: true }}
                        {...dataGridProps} columns={columns} columnGroupingModel={[
                {
                    groupId: 'web3',
                    headerName:"web3",
                    headerAlign: "center",
                    headerClassName: 'my-group-header',
                    children: [{ field: 'web3-dApps' },{ field: 'web3-SmartContract' },{ field: 'web3-NFTs' }],
                },
                {
                    groupId: 'HLF',
                    headerAlign: "center",
                    headerClassName: 'hlf-group-header',
                    children: [{ field: 'Permissioned Blockchain' },{ field: 'Supplychain' },{ field: 'Self Sovereign Identity' },
                        { field: 'DeFi Solutions' },{ field: 'Provenance' }],
                },

            ]} autoHeight />
        </List>
    );
};

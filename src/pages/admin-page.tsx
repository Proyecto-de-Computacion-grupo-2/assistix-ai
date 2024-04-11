import LayoutAdmin from "../components/shared-components/layout-admin/layout-admin.tsx";
import AdminTable from "../components/admin-components/admin-table/admin-table.tsx";

export default function Admin(){
    return (
        <LayoutAdmin>
            <AdminTable/>
        </LayoutAdmin>
    );
}
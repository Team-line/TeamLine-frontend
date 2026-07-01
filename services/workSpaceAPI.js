    import api from "../utils/api";

    //! 1. Get All Workspaces
    export async function getWorkspaces() {
    try {
        const response = await api.get('/api/v1/workspaces');
                const data = response.data?.data || response.data;
        
        if (!data) throw new Error('لم يتم العثور على أي مساحات عمل.');
        
        return data;
    } catch (error) {
        console.error("FETCH ERROR:", error);
        throw new Error(error.response?.data?.message || 'حدث خطأ أثناء جلب مساحات العمل.');
    }
    }


    //! Create New Workspace
    export async function createWorkspaceAPI(newWorkspace) {
    try {
        const response = await api.post('/api/v1/workspaces', newWorkspace);
        
        const data = response.data?.data || response.data;
        
        if (!data) throw new Error('فشل في استقبال بيانات مساحة العمل الجديدة من السيرفر.');
        
        return data;
    } catch (error) {
        console.error("CREATE WORKSPACE ERROR:", error);
        throw new Error(error.response?.data?.message || 'حدث خطأ أثناء إنشاء مساحة العمل.');
    }
    }

    //! 2. Delete Workspace
    export async function deleteWorkspace(workspaceId) {
    try {
        const response = await api.delete(`/api/v1/workspaces/${workspaceId}`);
        return response.data;
    } catch (error) {
        console.error("DELETE ERROR:", error);
        throw new Error(error.response?.data?.message || 'حدث خطأ أثناء حذف مساحة العمل.');
    }
    }

    //! 3. Update Workspace
    export async function updateWorkspace({ workspaceId, updatedData }) {
    try {
        const response = await api.patch(`/api/v1/workspaces/${workspaceId}`, updatedData);
        
        const data = response.data?.data || response.data;
        return data;
    } catch (error) {
        console.error("UPDATE ERROR:", error);
        throw new Error(error.response?.data?.message || 'حدث خطأ أثناء تعديل مساحة العمل.');
    }
    }
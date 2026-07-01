import api from "@/utils/api";

    //! 1. Get All Projects inside a Workspace
    export async function getProjects(workspaceId) {
    if (!workspaceId) return [];
    try {
        const response = await api.get(`/api/v1/workspaces/${workspaceId}/boards`);
        return response.data?.data || response.data;
    } catch (error) {
        console.error("FETCH PROJECTS ERROR:", error);
        throw new Error(error.response?.data?.message || "حدث خطأ أثناء جلب المشاريع.");
    }
}

    //! 2. Add New Project
    export async function createProjectAPI({ workspaceId, newProject }) {
    try {
        const response = await api.post(`/api/v1/workspaces/${workspaceId}/boards`, newProject);
        return response.data?.data || response.data;
    } catch (error) {
        console.error("ADD PROJECT ERROR:", error);
        throw new Error(error.response?.data?.message || "فشل إنشاء المشروع الجديد.");
    }
}

    //! 3. Delete Project
    export async function deleteProjectAPI({ workspaceId, projectId }) {
    try {
        const response = await api.delete(`/api/v1/workspaces/${workspaceId}/boards/${projectId}`);
        return response.data;
    } catch (error) {
        console.error("DELETE PROJECT ERROR:", error);
        throw new Error(error.response?.data?.message || "حدث خطأ أثناء حذف المشروع.");
    }
}

    //! 4. Update Project
    export async function updateProjectAPI({ workspaceId, projectId, projectData }) {
    try {
        const response = await api.patch(`/api/v1/workspaces/${workspaceId}/boards/${projectId}`, projectData);
        return response.data?.data || response.data;
    } catch (error) {
        console.error("UPDATE PROJECT ERROR:", error);
        throw new Error(error.response?.data?.message || "حدث خطأ أثناء تعديل المشروع.");
    }
}
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateWorkspace as updateWorkspaceAPI } from '@/services/workSpaceAPI';
import { toast } from 'react-hot-toast';

export const useUpdateWorkSpace = () => {
    const queryClient = useQueryClient();

    const { isPending: isUpdating, mutate: updateWorkspace } = useMutation({
        mutationFn: updateWorkspaceAPI,
        onSuccess: () => {
            toast.success("تم تحديث مساحة العمل بنجاح");
            queryClient.invalidateQueries({ queryKey: ['workSpaces'] });
        },
        onError: (err) => {
            toast.error(err.message || "حدث خطأ أثناء محاولة التعديل");
        }
    });

    return { isUpdating, updateWorkspace };
};
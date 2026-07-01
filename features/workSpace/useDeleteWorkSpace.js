import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWorkspace as deleteWorkspaceAPI } from '@/services/workSpaceAPI';
import { toast } from 'react-hot-toast';

export const useDeleteWorkSpace = () => {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate: deleteWorkspace } = useMutation({
        mutationFn: deleteWorkspaceAPI,
        onSuccess: () => {
            toast.success("تم حذف مساحة العمل بنجاح");
            queryClient.invalidateQueries({
                queryKey: ['workSpaces']
            });
        },
        onError: (err) => {
            toast.error(err.message || "حدث خطأ أثناء محاولة الحذف");
        }
    });

    return { isDeleting, deleteWorkspace };
};
import { useMutation,useQueryClient } from "@tanstack/react-query";
import {deleteProjectAPI} from '@/services/projectsAPI'
import { toast } from 'react-hot-toast';

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteProject } = useMutation({
    mutationFn: deleteProjectAPI,
    onSuccess: (data, variables) => {
      toast.success('تم حذف المشروع بنجاح');
      queryClient.invalidateQueries({ queryKey: ['projects', variables.workspaceId] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteProject };
};
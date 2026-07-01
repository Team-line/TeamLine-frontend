import { useMutation, useQueryClient } from "@tanstack/react-query";
import {updateProjectAPI} from '@/services/projectsAPI'
import { toast } from 'react-hot-toast';

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateProject } = useMutation({
    mutationFn: updateProjectAPI,
    onSuccess: (data, variables) => {
      toast.success('تم تحديث بيانات المشروع بنجاح');
      queryClient.invalidateQueries({ queryKey: ['projects', variables.workspaceId] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateProject };
};
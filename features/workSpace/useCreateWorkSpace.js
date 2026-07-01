import { useMutation, useQueryClient } from '@tanstack/react-query';
import api  from '@/utils/api';
import { toast } from 'react-hot-toast';

async function createWorkspaceAPI(newWorkspace) {
  const response = await api.post('/api/v1/workspaces', newWorkspace);
  return response.data?.data || response.data;
}

export const useCreateWorkSpace = () => {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createWorkspace } = useMutation({
    mutationFn: createWorkspaceAPI,
    onSuccess: () => {
      toast.success('تم إنشاء مساحة العمل بنجاح! 🎉');
            queryClient.invalidateQueries({ queryKey: ['workSpaces'] });
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || err.message || 'فشل إنشاء مساحة العمل');
    },
  });

  return { isCreating, createWorkspace };
};
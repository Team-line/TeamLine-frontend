import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProjectAPI } from '@/services/projectsAPI';
import { toast } from 'react-hot-toast';

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    // 👈 قمنا بتعديل هذا السطر ليمرر البيانات بوضوح لـ API
    mutationFn: ({ workspaceId, newProject }) => {
      console.log("البيانات المتوجهة للـ API حالياً:", { workspaceId, newProject });
      return createProjectAPI({ workspaceId, newProject });
    },
    
    onSuccess: (data, variables) => {
      toast.success('تم إنشاء المشروع بنجاح! 🎉');
      queryClient.invalidateQueries({ queryKey: ['projects', variables.workspaceId] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createProject };
};
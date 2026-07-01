import { useQuery } from "@tanstack/react-query";
import {getProjects} from '@/services/projectsAPI'

export const useGetProjects = (workspaceId) => {
  const { data: projects, isPending: isLoading, error } = useQuery({
    queryKey: ['projects', workspaceId], 
    queryFn: () => getProjects(workspaceId),
    enabled: !!workspaceId, 
  });
  return { projects, isLoading, error };
};
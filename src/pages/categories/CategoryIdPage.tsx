import { useParams } from "react-router-dom";
import { getToolsByCategory } from "../../api/toolAPI";
import MainContent from "../../components/AppLayout/MainContent";
import ToolCard from "../../components/ToolCard";
import useFetch from "../../hooks/useFetch";
import ToolCollectionLayout from "../../layouts/ToolCollectionLayout";
import { SkeletonToolCard } from "../../components/ToolCard/ToolCard";

export default function CategoryIdPage() {
  const { id = '' } = useParams<{ id: string }>();
  const { data, isLoading } = useFetch(() => getToolsByCategory(id), { dependencies: [id] });

  return (
    <MainContent title="CategoryIdPage" hasBackground={false}>
      <ToolCollectionLayout>
        {
          isLoading ?
            Array(3).fill(null).map((_, index) => <SkeletonToolCard key={index} />)
            :
            data?.map((tool) => <ToolCard key={tool._id} tool={tool} />)
        }
      </ToolCollectionLayout>
    </MainContent>
  );
}
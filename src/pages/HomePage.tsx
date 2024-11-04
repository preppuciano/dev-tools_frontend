import { getTools } from "../api/toolAPI";
import MainContent from "../components/AppLayout/MainContent";
import ToolCard from "../components/ToolCard";
import useFetch from "../hooks/useFetch";
import ToolCollectionLayout from "../layouts/ToolCollectionLayout";
import { SkeletonToolCard } from "../components/ToolCard/ToolCard";
import 'react-loading-skeleton/dist/skeleton.css'


export default function HomePage() {
  const { data, isLoading } = useFetch(() => getTools());
  return (
    <MainContent title="Latest" hasBackground={false}>
      <ToolCollectionLayout>
        {
          isLoading ?
            Array(6).fill(null).map((_, index) => <SkeletonToolCard key={index}/>)
            :
            data?.map((tool) => <ToolCard key={tool._id} tool={tool} />)
        }
      </ToolCollectionLayout>
    </MainContent>
  );
}
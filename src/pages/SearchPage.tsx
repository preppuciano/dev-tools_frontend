import { searchTools } from "../api/toolAPI";
import MainContent from "../components/AppLayout/MainContent";
import ToolCard from "../components/ToolCard";
import ToolCollectionLayout from "../layouts/ToolCollectionLayout";
import { SkeletonToolCard } from "../components/ToolCard/ToolCard";
import 'react-loading-skeleton/dist/skeleton.css'
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { ToolModel } from "../models/ToolModel";
import useFetchPene from "../hooks/useFetchPene";


export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const { data, isLoading, refreshData } = useFetchPene<ToolModel[]>(() => searchTools(query ?? ''), []);

  useEffect(() => {
    refreshData();
  }, [query]);


  return (
    <MainContent title="SearchPage" hasBackground={false}>
      <ToolCollectionLayout>
        {
          isLoading ?
            Array(3).fill(null).map((_, index) => <SkeletonToolCard key={index} />)
            :
            data.length == 0 ?
              <p>No results found</p>
              :
              data.map((tool) => <ToolCard key={tool._id} tool={tool} />)
        }
      </ToolCollectionLayout>
    </MainContent>
  );
}
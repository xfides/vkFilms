import {useEffect, useRef, useState} from "react";
import {AsyncService} from "@/ts/films.ts";
import {shallowEqualArrays} from "@/utils";

function useUpdatedServiceArgs<ServiceArgs extends unknown[]>(
  newServiceArgs: ServiceArgs
): ServiceArgs {
  const previousServiceArgs = useRef(newServiceArgs)

  const areServiceArgsEqual = shallowEqualArrays(
    previousServiceArgs.current,
    newServiceArgs
  )

  const updatedServiceArgs = areServiceArgsEqual
    ? previousServiceArgs.current
    : newServiceArgs

  return previousServiceArgs.current = updatedServiceArgs
}

export function useService<
  ServiceData,
  ServiceArgs extends unknown[] = unknown[]
>(
  serviceCB: (...args: ServiceArgs) => Promise<ServiceData>,
  ...currentServiceArgs: ServiceArgs
): AsyncService<ServiceData> {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ServiceData | null>(null);
  const [error, setError] = useState<Error | undefined>(undefined);

  const updatedServiceArgs = useUpdatedServiceArgs(currentServiceArgs);

  useEffect(() => {
    let ignoreServiceResults = false;

    async function doService() {
      setLoading(true);

      try {
        const data = await serviceCB(...updatedServiceArgs);

        if (!ignoreServiceResults) setData(data);
      } catch (e) {
        if (!ignoreServiceResults) setError(e as Error);
      } finally {
        setLoading(false);
      }
    }

    void doService();

    return function cleanUp() {
      ignoreServiceResults = true
    }
  }, [serviceCB, updatedServiceArgs]);

  return {
    loading,
    error,
    data,
  };
}
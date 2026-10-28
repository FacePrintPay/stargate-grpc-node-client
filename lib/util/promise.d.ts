import { StargateClient } from "../proto/stargate_grpc_pb";
import { Batch, Query, Response } from "../proto/query_pb";
import { CallOptions, Metadata } from "@grpc/grpc-js";
export interface PromisifiedStargateClient {
  executeQuery(
    argument: Query,
    metadata?: Metadata,
    options?: CallOptions
  ): Promise<Response>;
  executeBatch(
    argument: Batch,
    metadata?: Metadata,
    options?: CallOptions
  ): Promise<Response>;
}
export declare const promisifyStargateClient: (
  client: StargateClient
) => PromisifiedStargateClient;
//# sourceMappingURL=promise.d.ts.map

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=promise.d.ts

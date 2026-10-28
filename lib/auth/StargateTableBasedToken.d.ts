import { CallCredentials, Metadata } from "@grpc/grpc-js";
import { CallMetadataOptions } from "@grpc/grpc-js/build/src/call-credentials";
interface TabledBasedTokenConfig {
  authEndpoint: string;
  username: string;
  password: string;
}
export declare class StargateTableBasedToken extends CallCredentials {
  #private;
  private metadataGenerators;
  private httpClient;
  constructor({ authEndpoint, username, password }: TabledBasedTokenConfig);
  generateMetadata(options: CallMetadataOptions): Promise<Metadata>;
  compose(callCredentials: CallCredentials): CallCredentials;
  _equals(other: CallCredentials): boolean;
  protected getStargateAuthMetadata(
    options: CallMetadataOptions
  ): Promise<Metadata>;
}
export {};
//# sourceMappingURL=StargateTableBasedToken.d.ts.map

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=StargateTableBasedToken.d.ts

import { EventPattern, Payload } from "@nestjs/microservices";
import { KafkaMessage } from "./KafkaMessage";

export class KafkaController {
  @EventPattern("topic.sample.v1")
  async onTopicSampleV1(
    @Payload()
    message: KafkaMessage
  ): Promise<void> {}
}

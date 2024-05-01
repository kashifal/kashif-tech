import React from "react";
import { Link } from "react-router-dom";

const Policy = () => {
  return (
    <div className="h-screen bg-slate-200">
      <div className="max-w-4xl mt-12 rounded-lg  mx-auto space-y-3 py-6">
        <header class="  text-white py-4">
          <div class="container mx-auto px-4">
            <Link
              to="/"
              class="text-xs  text-emerald-700 underline font-medium"
            >
              Go to - Home
            </Link>
            <h1 class="text-3xl font-semibold">
              Refund and Cancellation Policy
            </h1>
          </div>
        </header>

        <main class="container  mx-auto px-4 py-8">
          <section
            id="cancellation-policy"
            class="mb-8 bg-white px-4 py-6 rounded-lg"
          >
            <h2 class="text-2xl font-semibold mb-4">Cancellation Policy</h2>
            <ol class="list-decimal pl-6">
              <li>
                Cancellation by Client: Clients can cancel their order within 3
                days of payment for a full refund. After this period, no refunds
                will be issued.
              </li>
              <li>
                Cancellation by Kashif Sulehria: Kashif Sulehria reserves the
                right to cancel an order if necessary. In such cases, clients
                will be notified and refunded in full.
              </li>
            </ol>
          </section>

          <section
            id="refund-policy"
            class="mb-8  bg-white px-4 py-6 rounded-lg"
          >
            <h2 class="text-2xl font-semibold mb-4">Refund Policy</h2>
            <ol class="list-decimal pl-6">
              <li>
                Refunds within 3 Days: Clients are eligible for a full refund if
                they request cancellation within 3 days of payment and if His
                request is solid.
              </li>
              <li>
                Refunds after 3 Days: After the initial 3-day period, no refunds
                will be issued.
              </li>
              <li>
                Proven Fault: If the client can provide substantial evidence of
                a problem caused by Kashif Sulehria's service within 3-5 days, a
                refund may be considered after review.
              </li>
            </ol>
          </section>

          <section id="no-refunds" class="mb-8  bg-white px-4 py-6 rounded-lg">
            <h2 class="text-2xl font-semibold mb-4">
              No Refunds After Completion
            </h2>
            <p>
              Once a task or project is completed and delivered to the client,
              no refunds will be issued, regardless of the circumstances.
            </p>
          </section>

          <section
            id="refund-request"
            className=" bg-white px-4 py-6 rounded-lg"
          >
            <h2 class="text-2xl font-semibold mb-4">Refund Request Process</h2>
            <ol class="list-decimal pl-6">
              <li>
                Clients must submit a refund request to Kashif first, in
                writing, detailing the reason for the request.
              </li>
              <li>
                Kashif Sulehria will review the request and assess whether it
                meets the criteria for a refund.
              </li>
              <li>
                If a refund is approved, it will be processed within 7 business
                days to the original payment method.
              </li>
            </ol>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Policy;

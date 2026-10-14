<script setup>
import { contact } from "~/data/site.js";
const me = useRuntimeConfig().public;

defineProps({ heading: Boolean });

// Netlify Forms: posted as urlencoded data to "/", with the form-name field.
// "bot-field" is the honeypot; real visitors never see or fill it.
const form = reactive({ Name: "", email: "", Message: "", "bot-field": "" });
const status = ref("idle"); // idle | sending | sent | error

const submit = async () => {
  status.value = "sending";
  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ "form-name": "contact", ...form }).toString(),
    });
    if (!res.ok) throw new Error(res.statusText);
    status.value = "sent";
    Object.assign(form, { Name: "", email: "", Message: "" });
  } catch (e) {
    status.value = "error";
  }
};

const field =
  "w-full rounded-lg bg-soft px-3 text-[16px] text-ink placeholder:text-muted outline-none transition focus:ring-2 focus:ring-accent";
</script>

<template>
  <section id="contact" class="container-site">
    <SectionHeading
      v-if="heading"
      title="CONTACT"
      to="/contact"
      class="mb-[61px]"
    />
    <div class="grid grid-cols-1 gap-y-[60px] md:grid-cols-2 md:gap-x-[68px]">
      <div data-reveal>
        <p class="text-[18px] leading-[1.7] lg:text-[22px]">
          {{ contact.intro }}
        </p>
        <address
          class="mt-6 text-[14px] not-italic leading-[1.7] lg:mt-[37px] lg:text-[18px]"
        >
          <span class="block">{{ me.location }}</span>
          <a
            :href="`mailto:${me.email}`"
            class="block text-accent hover:underline"
            >{{ me.email }}</a
          >
          <a
            :href="me.linkedin"
            target="_blank"
            rel="noopener"
            class="block text-accent hover:underline"
            >{{ me.linkedinLabel }}</a
          >
        </address>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="flex flex-col gap-5"
        data-reveal
        @submit.prevent="submit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label
            >Leave this empty
            <input
              v-model="form['bot-field']"
              name="bot-field"
              tabindex="-1"
              autocomplete="off"
          /></label>
        </p>
        <div class="grid grid-cols-2 gap-5">
          <label class="block">
            <span class="sr-only">Name</span>
            <input
              v-model="form.Name"
              :class="field"
              class="h-10"
              type="text"
              name="Name"
              placeholder="Jane Smith"
              required
              autocomplete="name"
            />
          </label>
          <label class="block">
            <span class="sr-only">Email</span>
            <input
              v-model="form.email"
              :class="field"
              class="h-10"
              type="email"
              name="email"
              placeholder="hello@example.com"
              required
              autocomplete="email"
            />
          </label>
        </div>
        <label class="block">
          <span class="sr-only">Message</span>
          <textarea
            v-model="form.Message"
            :class="field"
            class="block h-[150px] resize-y py-3"
            name="Message"
            placeholder="Message..."
            required
          />
        </label>
        <button
          type="submit"
          class="h-[55px] rounded-lg bg-accent text-[16px] font-medium text-on-accent shadow-[0_0.7px_0.7px_-0.6px_rgba(0,0,0,0.15)] transition-opacity hover:opacity-90 disabled:opacity-60"
          :disabled="status === 'sending'"
        >
          <span v-if="status === 'sending'">Sending…</span>
          <span v-else-if="status === 'sent'">Thank you!</span>
          <span v-else-if="status === 'error'"
            >Something went wrong. Try again</span
          >
          <span v-else>Send</span>
        </button>
      </form>
    </div>
  </section>
</template>

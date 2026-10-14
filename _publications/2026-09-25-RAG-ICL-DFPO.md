---
title: "Empowering LLMs for biomedical information extraction with RAG-ICL and DFPO"
collection: publications
category: 'journal-articles'
permalink: /publication/2026-09-25-RAG-ICL-DFPO
excerpt: 'This work introduces a structure-aware framework that empowers large language models (LLMs) for biomedical information extraction (named entity recognition and relation extraction) by integrating RAG-ICL (retrieval-augmented in-context learning), DFPO (dual-head fine-grained preference optimization), and a dual-mode calibration re-ranking module.'
date: 2026-09-25
venue: 'Pattern Recognition'
paperurl: 'https://doi.org/10.1016/j.patcog.2026.115042'
citation: Yinghong Li, Yu Wang, Hongyin Wang , Yudong Yan, Fan Yang, Zupeng Pan, Zhuohao Tong, Yongkang Li, Wenjun Wu, Boren Jiang, Mingze Bai, Yongfang Xie, Ying Zhou, Feng Zhu (2026). &quot;Empowering LLMs for biomedical information extraction with RAG-ICL and DFPO.&quot; <i>Pattern Recognition</i>, 183, 115042.'
---

### Abstract

Large language models (LLMs) offer new opportunities for biomedical information extraction (IE), but their application to named entity recognition (NER) and relation extraction (RE) remains limited by prototype selection, preference alignment, and structured-output validity. In this study, we formulate LLM-based biomedical IE as a structure-constrained pattern recognition problem and propose a framework centered on two complementary adaptation mechanisms. Retrieval-Augmented In-Context Learning (RAG-ICL) performs inference-time prototype selection by retrieving and reranking instance-specific demonstrations, enabling LLMs to use more relevant contextual examples without parameter updates. Dual-Phase Fine-tuning with Preference Optimization (DFPO) performs training-time parameter alignment through supervised fine-tuning, MFPEA-based structured preference data, DPO-Positive optimization, and post-finetuning. In addition, Dual-Mode Correction and Review (DMCR) is used as an auxiliary output-side verification module to improve parsability and reduce malformed structured predictions. Experiments across biomedical NER and RE benchmarks show that RAG-ICL improves over zero-shot and random/fixed ICL baselines, while DFPO consistently enhances extraction performance over supervised fine-tuning and representative biomedical IE systems. Further analyses demonstrate the importance of compact, relevant demonstrations, the incremental contribution of DFPO stages, and the practical trade-off between inference-time and training-time adaptation. These results suggest that decomposing LLM-based biomedical IE into prototype selection, preference-aware decision alignment, and structural verification provides an effective and coherent framework for schema-constrained biomedical text recognition.

### Highlights

* RAG-ICL enhances ICL by selecting high-quality examples for biomedical IE tasks.
* DFPO: dual-phase fine-tuning plus preference optimization for calibrated IE.
* DMCR applies dual-mode review to enforce structured, reliable outputs.
* On benchmarks, RAG-ICL tops random/zero-shot; DFPO adds ∼10-pt F1 gains.

### Publication Details

*   **DOI:** [10.1016/j.patcog.2026.115042](https://doi.org/10.1016/j.patcog.2026.115042)
*   **Authors:** Yinghong Li#, Yu Wang#, Hongyin Wang#, Yudong Yan, Fan Yang, Zupeng Pan, Zhuohao Tong, Yongkang Li, Wenjun Wu, Boren Jiang, Mingze Bai, Yongfang Xie, Ying Zhou*, Feng Zhu*
*   **Code:** [lyhbio/RAG-ICL-DFPO](https://github.com/lyhbio/RAG-ICL-DFPO)
*   **Model:** [liyinghong/DFPO-Gemma2](https://huggingface.co/liyinghong/DFPO-Gemma2)
